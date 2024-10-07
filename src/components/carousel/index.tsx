import { Carousel } from '@mantine/carousel';
// import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title } from '@mantine/core';
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
      className={classes.card+"  bg-contain bg-no-repeat"}
    >
      <div className=' rounded-md shadow-lg bg-primary bg-opacity-5 w-fit md:py-2 md:px-4 p-1'>
        <div>
        {/* <Text className={classes.category} size="xs">
          {category}
        </Text> */}
        <Title order={3} className={classes.title+" text-xs text-center"}>
          {title}
        </Title>
      </div>
      <Button  variant='fill' className=' shadow bg-text-primary text-primary mt-1  outline-none hover:bg-primary hover:text-text-primary p-1'>
        <Link to={link}>Read More</Link>
      </Button>
      </div>
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

  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data?.map((item:any) => (
    <Carousel.Slide key={item.title} >
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