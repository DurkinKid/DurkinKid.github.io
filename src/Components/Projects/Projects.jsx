import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


export default function Projects(){
   

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
            <Icon name="heart" />
        </Card.Content>
        </Card>
        <Card centered>
            <Image fluid src="https://imgur.com/a/FjdLnym"
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
            <Icon name="heart" />
        </Card.Content>
        </Card>
        </Card.Group>

        </>
    )
}