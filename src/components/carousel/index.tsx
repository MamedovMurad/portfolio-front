import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme } from '@mantine/core';
import classes from './Demo.module.css';
import '@mantine/carousel/styles.css';
import { useEffect, useState } from 'react';
import { getsliders } from '../../helpers/api/page';
import { admin_file } from '../../helpers/api';
import { Link } from 'react-router-dom';


interface CardProps {
  image: string;
  title: string;
  link: string;
}

function Card({ image, title , link}: CardProps) {
  return (
    <Paper
    
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${admin_file +image})` }}
      className={classes.card}
    >
      <div>
        {/* <Text className={classes.category} size="xs">
          {category}
        </Text> */}
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        <Link to={link}>Read article</Link>
      </Button>
    </Paper>
  );
}

export function CarouselUI() {
  const [data, setdata] = useState<any>(null);

  useEffect(() => {
      getsliders().then((data)=>{
          setdata(data?.data)
      })
  }, []);

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data?.map((item:any) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
   
     
      
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}