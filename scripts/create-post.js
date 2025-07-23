#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function createPost() {
  console.log('🚀 新しい記事を作成します\n');

  try {
    const title = await question('記事のタイトルを入力してください: ');
    const author = await question('著者名を入力してください (デフォルト: Crater Orbs開発チーム): ') || 'Crater Orbs開発チーム';
    const excerpt = await question('記事の要約を入力してください (150文字程度): ');
    const tagsInput = await question('タグを入力してください (カンマ区切り): ');
    
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);
    const date = formatDate(new Date());
    const slug = createSlug(title);
    const filename = `${date}-${slug}.md`;
    const filepath = path.join(__dirname, '..', 'posts', filename);

    const content = `---
title: '${title}'
date: '${date}'
author: '${author}'
excerpt: '${excerpt}'
tags: [${tags.map(tag => `'${tag}'`).join(', ')}]
---

# ${title}

## はじめに

記事の導入部分を書きます。

## 本文

### 小見出し1

内容を書きます。

### 小見出し2

内容を書きます。

## まとめ

記事のまとめを書きます。

---

**関連記事**
- [関連記事1のタイトル](リンク)
- [関連記事2のタイトル](リンク)
`;

    fs.writeFileSync(filepath, content, 'utf8');
    
    console.log(`\n✅ 記事が作成されました: ${filename}`);
    console.log(`📁 ファイルパス: ${filepath}`);
    console.log('\n📝 次の手順:');
    console.log('1. 作成されたファイルを編集して記事内容を追加');
    console.log('2. git add && git commit && git push でデプロイ');
    
  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
  } finally {
    rl.close();
  }
}

createPost();

