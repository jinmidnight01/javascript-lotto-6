import Validations from '../Validations.js';
import Conditions from '../constants/Conditions.js';

class Customer {
  /** @type {number} */
  #lottoPrice;

  /** @type {number} */
  #lottoCount;

  /** @type {Array} */
  #lottoNumbers;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = Number(lottoPrice);
    this.#lottoCount = this.#lottoPrice / Conditions.ONE_LOTTO_PRICE;
    this.#lottoNumbers = [];
  }

  #validateLottoPrice(lottoPrice) {
    Validations.hasSpace(lottoPrice);
    Validations.isNumber(lottoPrice);
    Validations.isPlus(lottoPrice);
    Validations.isThousandUnit(lottoPrice);
  }

  #validateLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach((lottoNumber) => {
      lottoNumber.forEach((number) => {
      Validations.isNumber(number);
      Validations.isInRange(number);
      Validations.isInteger(number);
    });
    Validations.isNotDuplicated(lottoNumber);
    Validations.isProperLength(lottoNumber);
    Validations.isSorted(lottoNumber);
    });
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  setLottoNumbers(lottoNumbers) {
    this.#validateLottoNumbers(lottoNumbers);
    this.#lottoNumbers = lottoNumbers;
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }
}

export default Customer;
