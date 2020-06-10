echo "start deploy to dev environment"
echo "build..."
npm install
npm run build:dev
echo "s3 sync..."
aws s3 sync --acl public-read --delete dist/ s3://YOUR-BUCKET-NAME
echo "invalidate cloudformation..."
aws cloudfront create-invalidation --distribution-id YOUR-CF-DISTRIBUTION-ID --paths "/*" > /dev/null
echo "deploy finished"
