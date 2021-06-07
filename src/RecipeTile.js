import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      
    },
    custom: {
      minHeight: "8rem"
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));

export default function RecipeTile({recipe}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
        
        <div className="recipeTile" data-aos="fade-up">

        <Card className={classes.root}>
      <CardHeader
        
        className={classes.custom}

        title={recipe["recipe"]["label"]}
        /*subheader={recipe["recipe"]["calories"]+" kcal"}*/
      />
      <a href={recipe["recipe"]["url"]}>
      <CardMedia
        className={classes.media}
        image={recipe["recipe"]["image"]}
        title="Paella dish"
      />
      </a>
      
      <CardActions disableSpacing>
        <div>Ingredients</div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {recipe["recipe"]["ingredients"].map((ingredient, index)=>(
            <Typography paragraph key={index}>{ingredient.text}</Typography>
                ))}
      
        </CardContent>
      </Collapse>
    </Card>

          {/*  <a href={recipe["recipe"]["url"]}>
                <img src={recipe["recipe"]["image"]} className="recipeTile__img" alt="Server Issue"/>
            </a>
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            
            <ol>
                {recipe["recipe"]["ingredients"].map((ingredient)=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>

            */}

        </div>
        
        </>
    )
}
