import { Text } from '@mantine/core';
 import { modals } from '@mantine/modals';
import { IconTrash } from '@tabler/icons-react';

export function DeletePopUp({deleteItem}:{deleteItem?:any}) {
  const openDeleteModal = (deleteItem:any) =>
    modals.openConfirmModal({
      title: 'Delete your card',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete card', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => {
        deleteItem()
      },
    });

  return <span className=' w-full flex justify-center h-full ' onClick={()=>{openDeleteModal(deleteItem) }} color="red">
    <IconTrash size={20}/>
  </span>;
}