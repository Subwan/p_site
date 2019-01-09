import axios from 'axios';

export const sendDonation = async (donationData) => {
  try {
    await axios.post('https://money.yandex.ru/quickpay/confirm.xml', {
      receiver: '410011287039660',
      'quickpay-form': 'donate',
      targets: 'PDRLK DONATION',
      paymentType: donationData.paymentType,
      sum: donationData.sum,
      formcomment: 'PDRLK DONATION',
      'short-dest': 'PDRLK DONATION',
      comment: donationData.comment,
      // successURL: 'http://pidrilka.ru/',
    });
  } catch (e) {
    console.error(e);
  }
}
