'use client';
import { Button, Container, Drawer, Input, MultiSelect, Rating } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Icon12Hours, IconSearch } from '@tabler/icons-react';
import React from 'react'


const MantineComponents = () => {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Container>
            <Input
                mt={50}
                placeholder='Enter Your Query'
                size='lg'
                variant='filled'
                radius={'50'}
                // error
                rightSection={

                    <IconSearch />
                }
            />

            <Rating mt={'50'} size={40} color='cyan' fractions={'2'} count={6} />

            <MultiSelect
                label="Select Genre"
                placeholder='Pick genres'
                data={['Actions', 'Drama', 'Comedy', 'Horror', 'Thiller', 'Animation']}
            />
            <Button mt='lg' variant='outline' color='grape' onClick={open}> Open Drawer </Button>

            <Drawer 
            opened={opened} 
            position='bottom' 
            onClose={close}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <h2>drawer content</h2>
            </Drawer>
        </Container>
    )
}

export default MantineComponents;