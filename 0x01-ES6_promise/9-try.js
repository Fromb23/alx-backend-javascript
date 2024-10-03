function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push();
  } catch {
    queue.push(error.message);
  }
  queue.push('Gurdrail was processed');

  return queue;
}
