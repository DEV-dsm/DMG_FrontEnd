import { ToastContainer, toast } from 'react-toastify';
import * as S from './style';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// images
import clickCheck from '../../assets/auth/clickCheck.png';

const LogIn = () => {
    // 변수 선언
    let check: boolean = true;
    const navigate: any = useNavigate();

    // input 변수
    const [inputs, setInputs] = useState({
        identify: '',
        password: '',
    });
    const { identify, password } = inputs;

    const onChange = (e: any): void => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    // 1. Id
    const errorId = (): void => {
        // 아이디 입력 안 했을 때
        if (identify === '') {
            toast.error('아이디를 입력해 주세요.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1300,
            });
            check = false;
        }
    };
    // 2. Password
    const errorPassword = (): void  => {
        // 비밀번호 입력 안 했을 때
        if (password === '') {
            toast.error('비밀번호를 입력해 주세요.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1300,
            });
            check = false;
        }
    };
    // 3. ALL
    const errorInfo = (): void => {
        // 정보가 틀릴 때
    };

    const logIn = (): void => {
        errorId();
        errorPassword();
        errorInfo();

        if (check) {
            // axios({
            //     method: 'POST',
            //     url: `https://${BASE_URL}/user/login`,
            //     data: {
            //         identify: identify,
            //         password: password,
            //     },
            // });

            navigate('/messageslist');
        }
    };

    return (
        <>
            <ToastContainer />

            <S.Wrapper>
                <S.Box>
                    <S.Title>LOG IN</S.Title>

                    <S.Input onChange={onChange} name="identify" value={identify} type="text" placeholder="Identity" />
                    <S.Input onChange={onChange} name="password" value={password} type="text" placeholder="Password" />

                    <S.Btn onClick={logIn}>
                        <S.Text>LOG IN</S.Text>
                        <S.Img src={clickCheck} alt="clickCheck" />
                    </S.Btn>

                    <Link to="/findpassword">
                        <S.Link>Forgot Password?</S.Link>
                    </Link>
                </S.Box>
            </S.Wrapper>
        </>
    );
};

export default LogIn;
