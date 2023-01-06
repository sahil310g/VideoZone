import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174'
  ];

  const[videoSrc, setVideoSrc] =  useState(videosArr[0])
  
  return (
    <>
      <Stack direction={['column', 'row']} h={'100vh'} >
        <VStack w={'full'}>
          <video controls controlsList='nodownload' src={videoSrc} style={{ width: "100%" }}></video>
          <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} >
            <Heading>Sample Video</Heading>
            <Text>This is a sample video</Text>
          </VStack>
        </VStack>

        <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'} >
          
          {
            videosArr.map((item,index) =>(
                <Button variant={'ghost'} colorScheme={'purple'} onClick={()=>setVideoSrc(item)} >Lecture {index + 1}</Button> 
            ))
          }
        </VStack>

      </Stack>
    </>
  )
}

export default Videos