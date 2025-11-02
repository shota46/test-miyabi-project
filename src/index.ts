/**
 * test-miyabi-project - Entry Point
 *
 * Autonomous development powered by Miyabi framework
 */

console.log('🌸 Welcome to test-miyabi-project!');
console.log('Powered by Miyabi - Autonomous AI Development Framework');
console.log('');
console.log('This project includes:');
console.log('  ✓ 7 AI agents ready to work');
console.log('  ✓ Automatic Issue → PR pipeline');
console.log('  ✓ 53-label state machine');
console.log('  ✓ CI/CD automation');
console.log('');
console.log('Next steps:');
console.log('  1. Create an issue: gh issue create --title "Your task"');
console.log('  2. Watch agents work: npx miyabi status --watch');
console.log('  3. Review the PR when ready');
console.log('');
console.log('Documentation: See CLAUDE.md and README.md');

export function hello(): string {
  return 'Hello from test-miyabi-project!';
}

/**
 * sayHello - 名前を受け取り、挨拶メッセージを返す関数
 * @param name - 挨拶する相手の名前
 * @returns "Hello, [名前]!" という形式の挨拶メッセージ
 */
export function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

// Example async function
export async function main(): Promise<void> {
  console.log('Starting application...');

  // Your application logic here

  console.log('Application started successfully');
}

// Run main if this is the entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}
