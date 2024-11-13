// /app/layout.tsx
import { FormProvider } from './FormContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
