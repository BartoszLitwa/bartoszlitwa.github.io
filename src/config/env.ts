const normalizeEnvValue = (value: string | undefined): string | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

export const appEnv = {
  emailJsServiceId: normalizeEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  emailJsTemplateId: normalizeEnvValue(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  emailJsPublicKey: normalizeEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
} as const;

export const hasEmailJsConfig = (): boolean =>
  Boolean(appEnv.emailJsServiceId && appEnv.emailJsTemplateId && appEnv.emailJsPublicKey);
