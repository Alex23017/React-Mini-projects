import React, { useEffect, useRef, useState } from "react";
import { Block } from "./Block";
import "./index.scss";

function AppConvector() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const rateRef = useRef({});

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => res.json())
      .then((json) => {
        const ratesMap = {};
        json.forEach((item) => {
          ratesMap[item.cc] = item.rate;
        });
        rateRef.current = ratesMap;
        onChangeToPrice(1);
      })
      .catch((err) => console.warn(err));
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / rateRef.current[fromCurrency];
    const result = price * rateRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = (rateRef.current[fromCurrency] / rateRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="container-convector">
    <div className="App-convector">
      <Block
        onChangeValue={onChangeFromPrice}
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <Block
        onChangeValue={onChangeToPrice}
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
      </div>
      </div>
  );
}

export default AppConvector;
