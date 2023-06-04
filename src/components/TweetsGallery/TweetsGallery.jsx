import { selectUser, selectIsLoading } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { useEffect, useState } from "react";
import { TweetCard } from "components/TweetCard/TweetCard";
import { tweetReducer } from "redux/slice";
import css from './TweetsGallery.module.css'



export const TweetsGallery = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectUser);
    const isFetching = useSelector(selectIsLoading);
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(fetchTweets(page))
    }, [dispatch, page]);

return (
    <ul className={css.list}>
        {tweets.map((tweet) => (
            
            <li key={tweet.id}>
                <TweetCard tweet={tweet}/>
            </li>
        ))}
    </ul>
)
}