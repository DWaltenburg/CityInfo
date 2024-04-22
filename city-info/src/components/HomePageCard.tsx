import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./HomePageCard.css";

interface HomePageCardProps {
  title: string;
  link: string;
  description?: string;
  image_src?: string;
  image_alt?: string;
  image_placement?: "top" | "bottom";
}

export const HomePageCard = ({ title, link, description, image_src, image_alt, image_placement }: HomePageCardProps) => {
    return (
        <Card as={Link} to={link} className="normal-text">
            {(image_placement === "bottom" || !image_placement) ? 
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
            : null}
            {image_src && image_placement==="top" ? <Card.Img variant="top" src={image_src} alt={image_alt} /> : null}
            <Card.Body>
                {(image_placement === "top") ? 
                    <Card.Title>{title}</Card.Title>
                : null}
                {description ? <Card.Text>{description}</Card.Text> : <Card.Text>View information about {title.toLowerCase()}.</Card.Text>}
            </Card.Body>
            {(image_placement === "bottom" || !image_placement) ?
            <Card.Img variant="bottom" src={image_src} alt={image_alt} />
            : null}
        </Card>
    );
};