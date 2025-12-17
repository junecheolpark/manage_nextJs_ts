'use client';   // 반드시 첫 줄
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import style from './css/login.module.css';

type LoginInfo = {
  adminId: string;
  adminPwd: string;
};

export default function Home() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    adminId: '',
    adminPwd: '',
  });

  // 아이디 입력
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({
      ...prev,
      adminId: e.target.value,
    }));
  };

  // 비밀번호 입력
  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({
      ...prev,
      adminPwd: e.target.value,
    }));
  };

  // 로그인 처리
  const loginProc = async () => {
    if (!loginInfo.adminId || !loginInfo.adminPwd) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    /**
     * 여기서 보통:
     * 1. 서버 API 호출
     * 2. 성공 시 쿠키 설정
     */

    // 임시 로그인 성공 처리
    router.replace('/');
  };

  // 엔터키
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loginProc();
    }
  };

  return (
    <section className={style.loginCont}>
      <section className={style.loginBG}>
        <p>
          아이디어를<br />
          <span className="ftBold colPoint">
            구체화하는 힘,<br /> 박준철
          </span>
          입니다.
        </p>
      </section>

      <section className={style.login} id="login">
        <section>
          <img src="/images/login/logo.png" alt="junecheol" />
          <p>LOGIN</p>

          <input
            type="text"
            className='mgB20'
            placeholder="아이디를 입력해주세요."
            value={loginInfo.adminId}
            onChange={onChangeId}
            onKeyUp={onKeyUp}
          />

          <input
            type="password"
            className='mgB20'
            placeholder="비밀번호를 입력해주세요."
            value={loginInfo.adminPwd}
            onChange={onChangePwd}
            onKeyUp={onKeyUp}
          />

          <button
            type="button"
            className={style.loginBtn}
            onClick={loginProc}
          >
            로그인
          </button>
        </section>
      </section>
    </section>
  );
}
