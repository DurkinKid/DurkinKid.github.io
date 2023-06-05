import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import { useState } from "react";

export default function Projects(){
   
    // const faveIndex = post.favorites.findIndex(
    //     (favorite) => favorite.username === loggedUser.username
    //   );

    // const clickHandler =
    // faveIndex > -1
    //   ? () => removeFavorite(post.favorites[faveIndex]._id)
    //   : () => addFavorite(post._id);

    const [state, setState] = useState(0)

    function clickHandler(){
        setState({
            ...state + 1
        })
    }

    return (
        <>
        <Card.Group>
        <Card centered>
            <Image fluid src="https://camo.githubusercontent.com/321157b5a0cccb98d82db93bbb375ea41851d7e303846b7d270307fc25886ad2/68747470733a2f2f692e696d6775722e636f6d2f706b42314f75382e706e67"
            as='a'
            href= "https://charlesthegr8-sonofabeach.onrender.com"
            />

        <Card.Content>
        <Card.Header>BarFly</Card.Header>
        <Card.Meta>Team oriented developing skills are showcased in this example along with conscientious github management.</Card.Meta>
        <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
        Show some feedback<br/>
            <Icon name="heart"
            onClick={clickHandler}
            />
        </Card.Content>
        </Card>

        <Card centered>
            <Image fluid src="https://i.imgur.com/hIpH3a6.jpg"
            as='a'
            href= "https://github.com/DurkinKid/ReactGiphy"
            />

        <Card.Content>
        <Card.Header>Giphy React App</Card.Header>
        <Card.Meta>Fun and easy giphy api utlization.</Card.Meta>
        <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
        Show some feedback<br/>
            <Icon name="heart"
            onClick={clickHandler}
             />
        </Card.Content>
        </Card>

        <Card centered>
            <Image fluid src="https://i.imgur.com/09saRiE.jpg"
            as='a'
            href= "https://github.com/DurkinKid/ToppsCardsCollector"
            />

        <Card.Content>
        <Card.Header>Topps Card Collector App</Card.Header>
        <Card.Meta>Showcasing a gallery of desirable baseball cards with their unique content, allowing users to post for a multitude of applications whether it be selling an item or getting your inventory out there and seen by the masses.</Card.Meta>
        <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
        Show some feedback<br/>
            <Icon name="heart"
            onClick={clickHandler}
             />
        </Card.Content>
        </Card>
        </Card.Group>

        </>
    )
}