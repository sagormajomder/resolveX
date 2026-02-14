import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh'>
      <Header />
      <main className='min-w-0'>{children}</main>
      <Footer />
    </div>
  );
}
