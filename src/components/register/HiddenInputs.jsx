/* eslint-disable react/prop-types */
export default function HiddenInputs({ orderIdentifier }) {
  return (
    <>
      <input
        type="hidden"
        name="_redirect"
        defaultValue={`https://bgmedicina.com/success?type=register&id=${orderIdentifier}`}
      />
      <input type="hidden" name="_append" value="false" />
      <input
        type="hidden"
        name="_email.subject"
        value="Se ha inscrito un nuevo alumno"
      />
      <input
        type="hidden"
        name="_email.from"
        value="Sistema de Matrículas BG Medicina"
      />

      <input
        type="hidden"
        name="order_identifier"
        id="grid-order-identifier"
        defaultValue={orderIdentifier}
      />
    </>
  );
}
