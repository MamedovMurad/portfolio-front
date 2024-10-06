import { useDisclosure } from '@mantine/hooks';
import { Modal} from '@mantine/core';
import { useEffect } from 'react';



export function ShowCerticate({src,deleteSrc}:{src?:string,deleteSrc?:any}) {
    const [opened, { open, close }] = useDisclosure(false);

    
function closeAll() {
    deleteSrc&&deleteSrc()
    close()
}
useEffect(() => {
    close()
    if (src) {
       open() 
    }
}, [src]);

    return (
        <>
            <Modal size={'lg'} opened={opened} onClose={closeAll} title="Certificates" >
                  <iframe  src={src} className=' w-full h-full md:h-[400px] object-contain' ></iframe>
            </Modal>

        </>
    );
}