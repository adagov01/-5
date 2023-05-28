import { useDispatch, useSelector } from "react-redux";

function Detective() {

    const dispatch = useDispatch()

    const obj = useSelector(state => state)

    function handlerChange(){
        dispatch({
            type: 'психопат'
        })
    }



    return (
        <>
         {obj}
        <div>
            <button onClick={handlerChange}>Узнать правду</button>
        </div>
        </>
    );
}

export default Detective