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

export const signUpAction = async (prevState: IPrevState | null, formData: FormData): Promise<IValidateResponse> => {
  await delay(2000);

    const email = formData.get('email');
    const phone = formData.get('phone');

    const isInvalidEmail = typeof email !== 'string' || email == '' || !email;
    const isInvalidPhone = typeof phone !== 'string' || phone == '' || !phone;

    if (isInvalidEmail && isInvalidPhone) {
      return {
        success: false,
        text: 'Email and Phone are invalid'
      };
    }

    if (isInvalidEmail) {
      return {
        success: false,
        text: 'Email is invalid'
      };
    }

    if (isInvalidPhone) {
      return {
        success: false,
        text: 'Phone is invalid'
      };
    }

      return {
        success: true,
        text: 'Login successfully'
      };

}