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
            <Modal size={"xl"} opened={opened} onClose={closeAll} title="Certificates" >
            <div className="relative w-full overflow-hidden" style={{ paddingTop: "80%" }}>
      <iframe
        src={src}
        title="PDF Viewer"
        className="absolute top-0 left-0 w-full h-full border-none"
        style={{
          height: "100vh", // Ensures full height on mobile
          width: "100%",   // Full width
          overflow: "hidden", // Hides any potential overflow
        }}
      />
    </div>
                
            </Modal>

        </>
    );
}