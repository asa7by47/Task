const FormattingNumberComponent = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

export default FormattingNumberComponent;
