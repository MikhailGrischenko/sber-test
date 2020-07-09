import React from "react";

export const InputSearch: React.FunctionComponent = () => (
  <div className="input-field col s6">
    <input
      placeholder="Placeholder"
      type="search"
      id="search-input"
    />
    <label
      htmlFor="search-input"
    >
      Введите поисковый запрос
    </label>
  </div>
)