import React from 'react';
import Modal from 'react-modal';

import { sendDonation } from '../../api/requests';
import { YANDEX_PAYMENT_MODAL_TEXT } from '../../constants/text';

import './style.scss';

Modal.setAppElement('#root');

class YandexPaymentModal extends React.PureComponent {
  state = {
    paymentType: '',
    sum: '',
    comment: '',
  }

  onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const moneyRegExp = /^[0-9]+(\.[0-9]{1,2})?$/gm;
    const sumIsValid = moneyRegExp.test(this.state.sum);
    if (sumIsValid) {
      const donationData = {
        sum: this.state.sum,
        paymentType: this.state.paymentType,
        comment: this.state.comment,
      }
      sendDonation(donationData);
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalVisible}
        onRequestClose={() => this.props.closeModal()}
        className="modal"
        overlayClassName="overlay"
        contentLabel="Donation Modal"
      >
        <form className="yandex-payment__container" onSubmit={this.handleSubmit}>
          <h3 className="modal__headaer">{YANDEX_PAYMENT_MODAL_TEXT.header}</h3>
          <div className="yandex-modal-block">
            <div className="modal__label">{YANDEX_PAYMENT_MODAL_TEXT.comment}</div>
            <input
              className="yandex-payment__input yandex-payment__comment"
              type="text"
              name="comment"
              maxLength="200"
              value={this.state.comment}
              onChange={this.onChange}
            />
          </div>
          <div className="yandex-modal-block">
            <div className="modal__label">{YANDEX_PAYMENT_MODAL_TEXT.sum}</div>
            <div className="yandex-payment__input-container">
              <input
                className="yandex-payment__input yandex-payment__sum"
                type="number"
                name="sum"
                value={this.state.sum}
                onChange={this.onChange}
              />
              <span>&#8381;</span>
            </div>
          </div>
          <div className="yandex-modal-block">
            <div className="modal__label">{YANDEX_PAYMENT_MODAL_TEXT.paymentType}</div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <div className="yandex-modal-button-block">
            <button type="submit" className="yandex-modal__button yandex-modal__approve-button">
              Отправить
            </button>
            <button
              type="button"
              className="yandex-modal__button yandex-modal__close-button"
              onClick={() => this.props.closeModal()}
            >
              Отклонить
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default YandexPaymentModal;