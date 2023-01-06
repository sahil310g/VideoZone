import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.png";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.webp";

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
}

const Home = () => {
    return (
        <>
            <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
                <Box w="full" h={'100vh'}>
                    <Image src={img1} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Watch the Future
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img2} />
                    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Gaming
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img3} />
                    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                        Console Gaming
                    </Heading>
                </Box>
                <Box w="full" h={'100vh'}>
                    <Image src={img4} />
                    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                        Watch the night 
                    </Heading>
                </Box>
            </Carousel>

            <Container maxW={'container.xl'} minH={'100vh'} p='16'>
                <Heading textTransform={'uppercase'} py='2' w={"fit-content"} borderBottom={"2px solid"} m={'auto'} >
                    Services
                </Heading>
                <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']} >
                    <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} lineHeight={'90%'} p={['4','16']} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus dolor esse et nesciunt laboriosam atque optio similique vitae officiis error officia, magnam beatae fugit reiciendis nostrum pariatur accusamus repellat nihil, sint, deleniti corporis ratione! Deserunt vel sapiente earum possimus repudiandae vitae est, nihil ullam molestias ipsum distinctio dolorem sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorum, ipsa odit omnis perferendis unde aspernatur. Exercitationem, ut eligendi libero voluptatibus placeat cumque voluptates maxime, magnam tenetur asperiores neque cupiditate ipsam. Eius earum aliquam rem consectetur, sunt autem voluptas! Corrupti dolorum id earum velit natus perspiciatis dolores reiciendis nam alias?
                    </Text>
                </Stack>
            </Container>
        </>
    )
}

// const MyCarousel = () => {
//     <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showIndicators={false} showArrows={false}>
//         <Box w="full" h={'100vh'}>
//             <Image src={img1} />
//             <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
//                 Watch the Future
//             </Heading>
//         </Box>
//     </Carousel>
// }

export default Home