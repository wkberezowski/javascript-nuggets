const people = [
  {
    name: 'bob',
    location: { street: '123 main street', timezone: { offset: '+7:00' } },
  },
  {
    name: 'peter',
    location: { street: '123 pine street' },
  },
  {
    name: 'susan',
    location: { street: '123 apple street', timezone: { offset: '+9:00' } },
  },
];

people.forEach((person) => {
  // THE OLD WAY
  //   console.log(
  //     person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );

  //   THE OPTIONAL CHAINING
  console.log(person?.location?.timezone?.offset);
});

console.log();
