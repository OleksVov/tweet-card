import { useDispatch } from 'react-redux';
import { updateFollow, unUpdateFollow } from 'redux/operations';
import css from './TweetCard.module.css';
import Logo from '../../images/Logo.png';
import Picture2 from '../../images/Picture2.png';
import Boy from '../../images/Boy.png';


export const TweetCard = ({ tweet: { id, user, tweets, followers, avatar, follow} }) => {

    const dispatch = useDispatch();

    const handleFollow = (id, follow, followers) => {
        dispatch(
updateFollow ({id, follow: !follow, followers: followers})
        )
      };
    
      const handleUnFollow = (id, follow, followers) => {
        dispatch(
unUpdateFollow ({id, follow: !follow, followers: followers})
        )
      };
    return (
                <div className={css.cardBox}>
      <img src={Logo} alt="logo" className={css.logo} />
      <img src={Picture2} alt="set of figurines" className={css.picture} />

      <div className={css.rectangle}></div>

      <img className={css.elipse} src={Boy} alt='boy' />
      <img className={css.avatar} src={avatar} alt={user} />
   
     <div className={css.box} >
     <p className={css.text}>{tweets} tweets</p>
     <p className={css.text}>{followers} followers</p>
    
     { follow ? 
     (<button onClick={() => {handleUnFollow(id, follow, followers)}} type="button" className={css.button}>Following</button>) : (
     <button onClick={() => {handleFollow(id, follow, followers)}} type="button" className={css.button} style = {{background:'#EBD8FF'}}>Follow</button>)}
     </div>
    </div>

    )
};


