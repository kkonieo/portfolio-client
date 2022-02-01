import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
// import ProgressBar from "./ProgressBar.js";
import { Link, useHistory } from 'react-router-dom';
import MainNav from '../components/mainNav';
import axios from 'axios';
import Foo from '../components/foo';



const Guide = ({history}) => {

    let Numbers = [...Array(50)].map((v, i) => i);

    const location = useLocation();
    const [answer, setAnswer] = useState([]);
    const [answerlist, setAnswerList] = useState([]);
    const [isCheck,setIsCheck ] = useState(false)

    console.log(location.state)


    const buttonOnClick = (event) => {
        // let questionKey = Math.floor((event.target.value - 1) /2 );
        let newObj = {...answerlist, [questionKey]: event.target.value}
        setAnswerList(newObj);
        console.log(event.target.className)
        console.log(event.target.value)
        setIsCheck(true)
    }


    async function asyncCall() {
        try {
            const response = await axios.get('https://www.career.go.kr/inspct/openapi/test/questions?apikey=73587f95ef371322626bf3a537e9eb3b&q=6')
            const res = response.data.RESULT;
            setAnswer(res.splice(0)) //페이지

            return res;
        } catch(error) {
            console.error(error);
        }
    }
    useEffect(() => asyncCall(), [])


    const contentList = [
        '검사는 이렇게 진행됩니다.',
        '직업 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.',
        '가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.',
        '아래의 예시 질문에 응답해주세요.',
        '예시 질문에 응답해주셔야 검사가 시작됩니다.',
    ]



    return (

        // div 협곡에 오신걸 환영합니다.. 이건 div협곡 맛보기

        <div>

        <MainNav />

            <div className="container">

                    <div className="main">
                        <h1 className = "title"> {contentList[0]} </h1>
                        <p className = "content"> {contentList[1]} <br/>{contentList[2]}</p>
                    </div>

                    <Foo />

                    <div>
                        <h3 className = "title2">{contentList[3]}</h3>

                        <p className = "content">{contentList[4]}</p>
                    </div>

                <div>

                    <div className="questionHead">

                        <h4 className="qustionNumber">
                            Q{Numbers[1]}.
                        </h4>

                        <h5 className="qustionText">{answer[0]?.question}</h5>

                    </div>

                    <div className="questionBody">
                        <div className="btnContainer">

                            <button className=
                                            {answerlist[0] == 1
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                name="answer"
                                value="1"
                                onClick = {buttonOnClick}
                            >{answer[0]?.answer01}</button>

                            <button className=
                                            {answerlist[0] == 2
                                            ?
                                            "clickedBtn" : "answerBtn"}
                                name="answer"
                                value="2"
                                onClick = {buttonOnClick}
                            >{answer[0]?.answer02}</button>

                        </div>

                            <div>
                                <p className="explanation">
                                &gt; {answer[0]?.answer01} : {answer[0]?.answer03}
                                <br />
                                &gt; {answer[0]?.answer02} : {answer[0]?.answer04}  </p>
                            </div>

                        </div>


                </div>

                <Foo />


            <div Id="btn">
                <Link to='/'>
                    <button type="submit"
                            className="back"
                            >뒤로가기</button></Link>


                    {
                    // (answer === '1') || (answer === '2') ?
                    isCheck ?
                    <button type="submit"
                            className="start"
                            onClick={ (event) => { history.push({
                                                    pathname: '/test1',
                                                    state: {...location.state}
                                                    })
                                                    window.location.href ='/test1'
                            }}
                            >
                                다음으로</button>
                    :
                    <button type="submit"
                            className="start"
                            disabled >
                                다음으로</button>
                    }

            </div>




            </div>




    </div>


    );
}


export default Guide;

