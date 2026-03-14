#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
export HEADLESS=true
export WORKERS=${WORKERS:-4}
RETRIES=2

# Optional tag filter from first argument
TAG=$1

# Print header
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}Running Playwright BDD Tests${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "Workers: $WORKERS"
echo "Headless: $HEADLESS"
echo "Retries: $RETRIES"
[[ -n "$TAG" ]] && echo "Tag filter: @$TAG"

# Run bddgen
echo -e "\n${YELLOW}[1/2] Generating BDD tests...${NC}"
npx bddgen
if [ $? -ne 0 ]; then
    echo -e "${RED}✗ BDD generation failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ BDD generation complete${NC}"

# Build playwright command
CMD="npx playwright test --retries=$RETRIES"
[[ -n "$TAG" ]] && CMD="$CMD --grep @$TAG"

# Run tests
echo -e "\n${YELLOW}[2/2] Running tests...${NC}"
eval $CMD
TEST_EXIT_CODE=$?

# Print results
echo -e "\n${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
if [ $TEST_EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✓ All tests passed!${NC}"
else
    echo -e "${RED}✗ Some tests failed (exit code: $TEST_EXIT_CODE)${NC}"
fi
echo -e "\n${YELLOW}HTML Report:${NC} playwright-report/index.html"
echo -e "${YELLOW}View report:${NC} npx playwright show-report"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

exit $TEST_EXIT_CODE
