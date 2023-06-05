import { selectUser, selectStatusFilter } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { useEffect, useState } from "react";
import { TweetCard } from "components/TweetCard/TweetCard";
import { clearOnMount } from "redux/slice";
import { Filter } from "components/Filter/Filter";
import { statusFilter } from "redux/constants";
import css from './TweetsGallery.module.css'

const getVisibleTweets = (tweets, statFilter) => {
    switch (statFilter) {
      case statusFilter.follow:
        return tweets.filter(tweet => !tweet.follow);
      case statusFilter.following:
        return tweets.filter(tweet => tweet.follow);
      default:
        return tweets;
    }
  };

export const TweetsGallery = () => {
    const dispatch = useDispatch();
    const tweets = useSelector(selectUser);
    const statusFilter = useSelector(selectStatusFilter);
    const visibleTweetsCards = getVisibleTweets(tweets, statusFilter);
    const [page, setPage] = useState(1);

   
   
    useEffect(() => {
        dispatch(fetchTweets(page))
    }, [dispatch, page]);

    useEffect(() => {
        return () => {
            dispatch(clearOnMount());
            setPage(1)
        }
    }, [dispatch]);

    const handleMore =() => {
        setPage(page +1);
    };


return (
    <div className={css.box}>
        <Filter/>
        <ul className={css.list}>
        {visibleTweetsCards.map((tweet) => (
            
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