import { Block, KnownBlock } from '@slack/types';
import { SummaryResults } from 'playwright-slack-report/dist/src';

export function generateCustomLayoutSimpleExample(summaryResults: SummaryResults,): Array<Block | KnownBlock> {

  return [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          summaryResults.failed === 0
            ? ':tada: All tests passed!'
            : `😭${summaryResults.failed} failure(s) out of ${summaryResults.tests.length} tests`,
      },
    },
  ];
}

