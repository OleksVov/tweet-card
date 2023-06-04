import { selectUser } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { useEffect, useState } from "react";
import { TweetCard } from "components/TweetCard/TweetCard";
import css from './TweetsGallery.module.css'



export const TweetsGallery = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectUser);
    const [page, setPage] = useState(1);
   
   
    useEffect(() => {
        dispatch(fetchTweets(page))
    }, [dispatch, page]);

    const handleMore =() => {
        setPage(page +1);
    }

return (
    <div className={css.box}>
        <ul className={css.list}>
        {tweets.map((tweet) => (
            
            <li key={tweet.id}>
                <TweetCard tweet={tweet}/>
            </li>
        ))}
    </ul>
   {tweets.length < 12 && (
     <button onClick={handleMore} type="button" className={css.button}>Load more</button>
   )}
    </div>
)
}