import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '../components';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => router.replace(`/`), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <div className="w-full h-screen flex flex-col justify-center text-center text-2xl font-semibold text-[#9E7676]">페이지를 찾을 수 없음</div>
    </Container>
  );
}
