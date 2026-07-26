#!/bin/bash
# ============================================================
# Hexo → Vercel 一键部署
# 用法: bash deploy.sh [提交信息]
# ============================================================
set -e

cd "$(dirname "$0")"

MESSAGE="${1:-📝 更新博客内容}"

echo "============================================"
echo "  Hexo → Vercel 一键部署"
echo "============================================"

# 1. 生成静态文件
echo ""
echo "[1/2] hexo clean && hexo generate ..."
hexo clean
hexo generate

# 2. 提交源码并推送 GitHub
echo ""
echo "[2/2] git add → commit → push ..."
git add -A
git commit -m "$MESSAGE" || echo "  ℹ 没有新的更改"
git push origin main 2>/dev/null || git push origin master 2>/dev/null

echo ""
echo "============================================"
echo "  ✅ 已推送到 GitHub"
echo "  🚀 Vercel 正在自动部署..."
echo "  去 Vercel Dashboard 查看进度："
echo "  https://vercel.com/dashboard"
echo "============================================"
