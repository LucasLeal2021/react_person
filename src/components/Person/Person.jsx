// src/components/Person/Person.jsx
export default function Person({ person }) {
  const { name, age, sex, isMarried, partner } = person;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      {isMarried ? (
        <p className="Person__partner">
          My {partnerLabel} is {partner}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
