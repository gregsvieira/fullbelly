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

export const signInAction = async (prevState: IPrevState | null, formData: FormData): Promise<IValidateResponse> => {
  await delay(4000);

    const email = formData.get('email');

    const isInvalidEmail = typeof email !== 'string' || email == '' || !email;

    if (isInvalidEmail) {
      return {
        success: false,
        text: 'Email is invalid'
      };
    }

      return {
        success: true,
        text: 'Login successfully'
      };

}