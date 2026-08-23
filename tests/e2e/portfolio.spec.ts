import { expect, test, type Page } from '@playwright/test';

const PRODUCT_NAMES = [
  'DoifyNow',
  'RentifyNow',
  'HouseifyNow',
  'GoalifyNow',
  'DeployifyNow',
  'PostifyNow',
  'LeadifyNow',
  'InsightifyNow',
  'SupportifyNow'
] as const;

const UNLINKED_PRODUCT_NAMES = [
  'PostifyNow',
  'LeadifyNow',
  'InsightifyNow',
  'SupportifyNow'
] as const;

const openPortfolio = async (page: Page) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('main')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: /Bartosz Litwa/i })).toBeVisible();
};

const revealNavbarControl = async (page: Page, control: ReturnType<Page['getByRole']>) => {
  if (await control.isVisible()) return;

  const toggle = page.getByRole('button', { name: /navigation menu/i });
  await toggle.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(control).toBeVisible();
};

const scrollThroughPage = async (page: Page) => {
  await page.evaluate(async () => {
    const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    let position = 0;

    for (let index = 0; index < 200 && position < document.documentElement.scrollHeight; index++) {
      window.scrollTo(0, position);
      await nextFrame();
      await nextFrame();
      position += Math.max(window.innerHeight * 0.75, 300);
    }

    window.scrollTo(0, document.documentElement.scrollHeight);
    await nextFrame();
    await nextFrame();
  });
};

test.describe('portfolio journeys', () => {
  test('presents the Paperclip-powered company narrative and primary sections', async ({
    page
  }) => {
    await openPortfolio(page);

    const navigation = page.getByRole('navigation', { name: /main navigation/i });
    const homeLink = navigation.locator('a.navbar-link[href="#home"]');
    const companyLink = navigation.locator('a.navbar-link[href="#ecosystem"]');
    await expect(homeLink).toHaveAttribute('aria-current', 'page');

    const ecosystem = page.locator('#ecosystem');
    await ecosystem.scrollIntoViewIfNeeded();
    await expect(
      ecosystem.getByRole('heading', {
        name: 'An AI-native company, built as a product system',
        exact: true
      })
    ).toBeVisible();
    await expect(page.locator('main')).toContainText(/Paperclip-powered/i);

    await expect(companyLink).toHaveCount(1);
    await expect(companyLink).toHaveAttribute('aria-current', 'page');
    await expect(navigation.locator('a.navbar-link[href="#work"]')).toHaveCount(1);

    const work = page.locator('#work');
    await work.scrollIntoViewIfNeeded();
    await expect(work.getByRole('heading').first()).toBeVisible();
  });

  test('renders the nine-product ecosystem with honest link and stage states', async ({ page }) => {
    await openPortfolio(page);

    const ecosystem = page.locator('#ecosystem');
    await ecosystem.scrollIntoViewIfNeeded();
    const cards = ecosystem.locator('article[data-product-id]');
    await expect(cards).toHaveCount(PRODUCT_NAMES.length);

    for (const productName of PRODUCT_NAMES) {
      const card = cards.filter({ hasText: productName });
      await expect(card, `${productName} should have one ecosystem card`).toHaveCount(1);
      await expect(card.locator('[data-stage]')).toHaveCount(1);
      await expect(card.locator('[data-stage]')).toContainText(/\S/);
    }

    for (const productName of UNLINKED_PRODUCT_NAMES) {
      const card = cards.filter({ hasText: productName });
      await expect(
        card.locator('a'),
        `${productName} must not expose an unverified URL`
      ).toHaveCount(0);
    }

    const deployifyCard = cards.filter({ hasText: 'DeployifyNow' });
    const deployifyLink = deployifyCard.locator('a[href]').first();
    await expect(deployifyLink).toHaveCount(1);
    const deployifyHref = await deployifyLink.getAttribute('href');
    expect(deployifyHref).not.toBeNull();
    expect(new URL(deployifyHref!, page.url()).origin).toBe('https://deployifynow.com');
  });

  test('supports the keyboard skip link', async ({ page }) => {
    await openPortfolio(page);

    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main-content$/);
    await expect(page.locator('#main-content')).toBeFocused();
  });

  test('opens, navigates, and closes the mobile menu with the keyboard', async ({
    page
  }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile navigation journey');
    await openPortfolio(page);

    const toggle = page.getByRole('button', { name: /navigation menu/i });
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    const companyLink = page.getByRole('link', { name: 'Company', exact: true });
    await expect(companyLink).toBeVisible();
    await companyLink.press('Enter');
    await expect(page).toHaveURL(/#ecosystem$/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await toggle.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();

    await toggle.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const workLink = page.getByRole('link', { name: 'Work', exact: true });
    await workLink.press('Enter');
    await expect(page).toHaveURL(/#work$/);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('switches the complete experience from English to Polish', async ({ page }) => {
    await openPortfolio(page);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    const languageToggle = page.getByRole('button', { name: /select language/i });
    await revealNavbarControl(page, languageToggle);
    await languageToggle.press('Enter');
    const englishOption = page.getByRole('option', { name: /English/i });
    const polishOption = page.getByRole('option', { name: /Polski/i });
    await expect(englishOption).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(polishOption).toBeFocused();
    await polishOption.press('Enter');

    await expect(page.locator('html')).toHaveAttribute('lang', 'pl');
    await expect(page.locator('.language-toggle-btn')).toContainText('PL');
    await expect(page.getByRole('link', { name: 'Company', exact: true })).toHaveCount(0);
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('preferred-language')))
      .toBe('pl');
  });

  test('removes animation delays and smooth scrolling for reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await openPortfolio(page);
    await scrollThroughPage(page);

    const motionState = await page.evaluate(() => {
      const maximumDurationInMilliseconds = (value: string) =>
        value.split(',').reduce((maximum, duration) => {
          const normalized = duration.trim();
          const numericValue = Number.parseFloat(normalized) || 0;
          const milliseconds = normalized.endsWith('ms') ? numericValue : numericValue * 1000;
          return Math.max(maximum, milliseconds);
        }, 0);

      const offenders = Array.from(document.querySelectorAll<HTMLElement>('body *'))
        .map((element) => {
          const style = window.getComputedStyle(element);
          return {
            element: `${element.tagName.toLowerCase()}.${element.className}`,
            animationDuration: maximumDurationInMilliseconds(style.animationDuration),
            animationDelay: maximumDurationInMilliseconds(style.animationDelay),
            transitionDuration: maximumDurationInMilliseconds(style.transitionDuration),
            transitionDelay: maximumDurationInMilliseconds(style.transitionDelay)
          };
        })
        .filter(
          ({ animationDuration, animationDelay, transitionDuration, transitionDelay }) =>
            animationDuration > 0.1 ||
            animationDelay > 0.1 ||
            transitionDuration > 0.1 ||
            transitionDelay > 0.1
        )
        .slice(0, 10);

      return {
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        scrollBehavior: window.getComputedStyle(document.documentElement).scrollBehavior,
        offenders
      };
    });

    expect(motionState.reducedMotion).toBe(true);
    expect(motionState.scrollBehavior).toBe('auto');
    expect(motionState.offenders).toEqual([]);
  });

  test('has no page-level horizontal overflow', async ({ page }) => {
    await openPortfolio(page);
    await scrollThroughPage(page);

    const dimensions = await page.evaluate(() => ({
      documentClientWidth: document.documentElement.clientWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      bodyClientWidth: document.body.clientWidth,
      bodyScrollWidth: document.body.scrollWidth
    }));

    expect(dimensions.documentScrollWidth).toBeLessThanOrEqual(dimensions.documentClientWidth + 1);
    expect(dimensions.bodyScrollWidth).toBeLessThanOrEqual(dimensions.bodyClientWidth + 1);
  });

  test('keeps core text and focus tokens at accessible contrast in both themes', async ({
    page
  }) => {
    await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'dark'));
    await openPortfolio(page);

    const readContrast = () =>
      page.evaluate(() => {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const parseHex = (value: string) => {
          const normalized = value.trim().replace('#', '');
          const expanded =
            normalized.length === 3
              ? normalized
                  .split('')
                  .map((character) => `${character}${character}`)
                  .join('')
              : normalized;
          return [0, 2, 4].map((offset) => Number.parseInt(expanded.slice(offset, offset + 2), 16));
        };
        const luminance = (color: number[]) => {
          const channels = color.map((channel) => {
            const normalized = channel / 255;
            return normalized <= 0.03928
              ? normalized / 12.92
              : ((normalized + 0.055) / 1.055) ** 2.4;
          });
          return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
        };
        const ratio = (foreground: string, background: string) => {
          const foregroundLuminance = luminance(parseHex(foreground));
          const backgroundLuminance = luminance(parseHex(background));
          return (
            (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
            (Math.min(foregroundLuminance, backgroundLuminance) + 0.05)
          );
        };
        const readToken = (token: string) => rootStyles.getPropertyValue(token);
        const background = readToken('--bg-primary');
        const textTokens = [
          '--text-primary',
          '--text-secondary',
          '--text-muted',
          '--accent-glow',
          '--accent-secondary'
        ];

        return {
          text: Object.fromEntries(
            textTokens.map((token) => [token, ratio(readToken(token), background)])
          ),
          focus: ratio(readToken('--focus-ring'), background)
        };
      });

    for (const theme of ['dark', 'light'] as const) {
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      const contrast = await readContrast();
      for (const [token, ratio] of Object.entries(contrast.text)) {
        expect(ratio, `${theme} ${token} contrast`).toBeGreaterThanOrEqual(4.5);
      }
      expect(contrast.focus, `${theme} focus-ring contrast`).toBeGreaterThanOrEqual(3);

      if (theme === 'dark') {
        const themeToggle = page.getByRole('button', { name: /switch to light theme/i });
        await revealNavbarControl(page, themeToggle);
        await themeToggle.click();
      }
    }
  });

  test('keeps fragment links and external-link safety attributes valid', async ({ page }) => {
    await openPortfolio(page);
    await scrollThroughPage(page);

    const fragmentState = await page.evaluate(() => {
      const hrefs = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')).map(
        (link) => link.getAttribute('href') ?? ''
      );
      const placeholders = hrefs.filter((href) => href === '#');
      const missingTargets = hrefs.filter((href) => {
        if (!href.startsWith('#') || href.length === 1) return false;
        return document.getElementById(decodeURIComponent(href.slice(1))) === null;
      });
      const ids = Array.from(document.querySelectorAll<HTMLElement>('[id]')).map(
        (element) => element.id
      );
      const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

      return { placeholders, missingTargets, duplicateIds };
    });

    expect(fragmentState.placeholders).toEqual([]);
    expect(fragmentState.missingTargets).toEqual([]);
    expect(fragmentState.duplicateIds).toEqual([]);

    const unsafeExternalLinks = await page.locator('a[href]').evaluateAll((links) =>
      links.flatMap((element) => {
        const link = element as HTMLAnchorElement;
        const url = new URL(link.href);
        if (!['http:', 'https:'].includes(url.protocol) || url.origin === window.location.origin) {
          return [];
        }

        const relTokens = link.rel.toLowerCase().split(/\s+/);
        return link.target === '_blank' &&
          relTokens.includes('noopener') &&
          relTokens.includes('noreferrer')
          ? []
          : [link.href];
      })
    );

    expect(unsafeExternalLinks).toEqual([]);
  });

  test('survives unavailable external images', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.route('**/*', async (route) => {
      const request = route.request();
      const url = new URL(request.url());
      const isExternalImage =
        request.resourceType() === 'image' &&
        ['http:', 'https:'].includes(url.protocol) &&
        url.hostname !== '127.0.0.1';

      if (isExternalImage) {
        await route.abort('failed');
        return;
      }

      await route.continue();
    });

    await openPortfolio(page);
    await scrollThroughPage(page);

    await expect(page.getByRole('heading', { level: 1, name: /Bartosz Litwa/i })).toBeVisible();
    await expect(page.locator('#ecosystem')).toContainText('DoifyNow');
    await expect(page.locator('#work')).toBeAttached();
    await expect
      .poll(() => page.locator('.skill-icon-fallback, .badge-image-fallback').count())
      .toBeGreaterThan(0);
    expect(pageErrors).toEqual([]);
  });

  test('keeps the project gallery inside the work section', async ({ page }) => {
    await openPortfolio(page);

    const work = page.locator('#work');
    await work.scrollIntoViewIfNeeded();
    await expect(work.getByRole('heading').first()).toBeVisible();

    const gallery = work.locator('[data-project-gallery], .projects-grid').first();
    await expect(gallery).toBeVisible();
    await expect.poll(() => gallery.locator('article, a.project-card').count()).toBeGreaterThan(0);

    const firstCard = gallery.locator('a.project-card').first();
    const mediaLayout = await firstCard.evaluate((card) => {
      const media = card.querySelector<HTMLElement>('.project-card-media');
      return {
        cardWidth: card.getBoundingClientRect().width,
        display: window.getComputedStyle(card).display,
        mediaWidth: media?.getBoundingClientRect().width ?? 0
      };
    });
    expect(mediaLayout.display).toBe('block');
    expect(mediaLayout.mediaWidth).toBeGreaterThan(mediaLayout.cardWidth * 0.95);
  });
});
