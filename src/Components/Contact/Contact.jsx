import React from "react";
import { Image, Item } from "semantic-ui-react";


export default function Contact(){
    return (
        <>
        <h2>Feel free to email me or conact me through any one of my applicable links</h2>
        <Item.Group>
            <Item>
                <Image src="https://i.imgur.com/ZSzEYv2.jpg" circular/>
            </Item>
        </Item.Group>
        </>
    )
}