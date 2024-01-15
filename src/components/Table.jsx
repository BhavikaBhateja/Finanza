import React from "react";

const Table = () => {
  return (
    <table class="table">
      <thead>
        <th>Month</th>
        <th>Opening Balance</th>
        <th>Interest</th>
        <th>Principal</th>
        <th>Closing Balance</th>
      </thead>
      <tbody>
        <tr>
          <td data-label="Month">Oct '23</td>
          <td data-label="Opening Balance">₹ 10,00,000</td>
          <td data-label="Interest">₹ 13,333</td>
          <td data-label="Principal">₹ 1,61,196</td>
          <td data-label="Closing Balance">₹ 8,38,803</td>
        </tr>

        <tr>
          <td data-label="Month">Nov '23</td>
          <td data-label="Opening Balance">₹ 8,38,803</td>
          <td data-label="Interest">₹ 11,184</td>
          <td data-label="Principal">₹ 1,63,345	</td>
          <td data-label="Closing Balance">₹ 6,75,457</td>
        </tr>

        <tr>
          <td data-label="Month">Dec '23</td>
          <td data-label="Opening Balance">₹ 6,75,457</td>
          <td data-label="Interest">₹ 9,006</td>
          <td data-label="Principal">₹ 1,65,523	</td>
          <td data-label="Closing Balance">₹ 5,09,933</td>
        </tr>

        <tr>
          <td data-label="Month">Jan '24</td>
          <td data-label="Opening Balance">₹ 5,09,933</td>
          <td data-label="Interest">₹ 6,799</td>
          <td data-label="Principal">₹ 1,67,730</td>
          <td data-label="Closing Balance">₹ 3,42,202</td>
        </tr>
        <tr>
          <td data-label="Month">Feb '24</td>
          <td data-label="Opening Balance">₹ 3,42,202</td>
          <td data-label="Interest">₹ 4,563</td>
          <td data-label="Principal">₹ 1,69,967</td>
          <td data-label="Closing Balance">₹ 1,72,235</td>
        </tr>
        <tr>
          <td data-label="Month">Mar '24</td>
          <td data-label="Opening Balance">₹ 1,72,235</td>
          <td data-label="Interest">₹ 2,296 </td>
          <td data-label="Principal">₹ 1,72,233</td>
          <td data-label="Closing Balance">₹0.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
