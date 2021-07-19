import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import '../Header/Header.css'

const useStyles = makeStyles({
    root: {
        background: '#faebd7',
        opacity: 0.5,
        color: '#915c83',
        border: 0,
        borderRadius: 3,
        height: 75,
        padding: '30px 30px',
    },
    subroot: {
        background: '#915c83',
        color: '#faebd7',
        border: 0,
        borderRadius: 3,
        height: 75,
        padding: '30px 30px',
    }
});

export default function Header() {

    const classes = useStyles();

    const history = useHistory();

    const [page, setPage] = useState('');

    const [isNavigating, setIsNavigating] = useState(true)

    const changeTab = (e, page) => {
        console.log(e);

        setPage(page);

        e.target.id ?
        history.push(e.target.id)
        :
        history.push(e.target.parentElement.id);

        setIsNavigating(false)
    };

    const showButtonGroup = e => {
        setIsNavigating(true);
    }

    return (
        <header className="portfolioHeader">

            <div className="logo">
                <img src="portfologo.svg" alt="Porfolio Logo"/>
            </div>

            <div className="pageTitle">
                <h1 className="name">Preston Thomas</h1>
            </div>
            
            {isNavigating ?
                <ButtonGroup className="navButtons" variant="text" color="primary" aria-label="navigation panel button group">
                    {['About', 'Contact', 'Portfolio'].map( (page, i) => {
                        return (
                            <Button className={classes.root} key={i} onClick={e => changeTab(e, page)} id={`/${page}`}>
                                {page}
                            </Button>
                    )})}
                </ButtonGroup>
                :
                <Button className={[classes.subroot, 'navButtons']} onClick={e => showButtonGroup(e)}>{page}</Button>
            }
        </header>
    )
}