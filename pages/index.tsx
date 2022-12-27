import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { userState } from '../recoil/atom';
import { useInput } from '../hooks/useInput';
import { Button, Container } from '../components';
import CheckList from '../assets/main.svg';

export default function Home() {
  const router = useRouter();
  const [value, , onChange, isValid] = useInput('');
  const setUserState = useSetRecoilState(userState);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValid) {
      setUserState(value);
      router.replace(`/todo`);
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-5 w-full h-screen">
        <h1 className="text-5xl font-extrabold text-[#DBA39A]">TO DO</h1>
        <div className="w-20 my-10">
          <CheckList className="animate-pulse" fill="#9E7676" />
        </div>
        <form className="flex justify-between w-full gap-x-3 ">
          <input
            placeholder="이름을 입력하세요"
            type="text"
            value={value}
            onChange={onChange}
            className="w-full h-10 border-b-2 text-center outline-0 placeholder:text-center placeholder:text-xl bg-transparent border-[gray]"
          />
          <Button onClick={onSubmit}>시작</Button>
        </form>
      </div>
    </Container>
  );
}
