
import css from './TweetCard.module.css';
import Logo from '../../images/Logo.png';
import Picture2 from '../../images/Picture2.png';
import Boy from '../../images/Boy.png'


export const TweetCard = ({id, user, tweets, followers, avatar }) => {


    return (
                <div className={css.cardBox}>
      <img src={Logo} alt="logo" className={css.logo} />
      <img src={Picture2} alt="set of figurines" className={css.picture} />

      <div className={css.rectangle}></div>

      <img className={css.elipse} src={Boy} alt='boy' />
      <img className={css.avatar} src={Boy} alt={user} />
   
     <div className={css.box} >
     <p className={css.text}>{tweets} tweets</p>
     <p className={css.text}>{followers} followers</p>
     <button type="button" className={css.button}>Follow</button>
     </div>
    </div>

    )
};


