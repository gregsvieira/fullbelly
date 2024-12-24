'use server';

interface IValidateResponse {
  success: boolean;
  text: string;
}

interface IPrevState {
  text: string;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const filterAction = async (prevState: IPrevState | null, formData: FormData): Promise<IValidateResponse> => {
  await delay(4000);

  const action = formData.get('action');
  const orderId = formData.get('orderId');
  const clientName = formData.get('clientName');
  const status = formData.get('status');

  if (action === 'filter') {
    return {
      success: true,
      text: 'Filtered successfully',
    };
  }

  if (action === 'remove') {
    return {
      success: true,
      text: 'Filters removed successfully',
    };
  }

  return {
    success: false,
    text: 'Unknown action',
  };
};