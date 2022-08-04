/* eslint-disable */

require('@testing-library/jest-dom/extend-expect');
require('jest-localstorage-mock');

jest.mock('@utils/dayjs', () => {
  const mockTest = () => ({
    format: jest.fn(() => '2020-08-10 12:00:00'),
  });

  mockTest.utc = jest.fn(() => {
    const format = jest.fn(() => '2020-08-10 12:00:00');
    return (
      {
        format,
        fromNow: jest.fn(() => '1 day ago'),
        diff: jest.fn(() => 30),
        local: jest.fn(() => ({
          format,
        }))
      }
    );
  });

  return ({
    __esModule: true,
    default: mockTest,
    formatDayJs: jest.fn(() => '2020-08-10 12:00:00')
  });
});

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

jest.mock('@configs', () => ({
  chainConfig: {
    "title": "Mars Hub Block Explorer",
    "network": "testnet",
    "icon": "https://marsprotocol.io/mars_logo_colored.svg",
    "logo": {
      "default": "/images/mars-protocol.svg"
    },
    "prefix": {
      "consensus": "marsvalcons",
      "validator": "marsvaloper",
      "account": "mars"
    },
    "genesis": {
      "time": "2021-07-25T08:00:00",
      "height": 1
    },
    "primaryTokenUnit": "umars",
    "votingPowerTokenUnit": "umars",
    "tokenUnits": {
      "umars": {
        "display": "mars",
        "exponent": 6
      }
    },
    "extra": {
      "profile": true
    }
  },
  generalConfig: {
    "maintainer": {
      "name": "Forbole",
      "url": "https://forbole.com"
    },
    "github": {
      "reportIssue": "https://github.com/forbole/big-dipper-2.0-cosmos/issues"
    }
  }
}));

jest.mock('@recoil/profiles', () => {
  return ({
    useProfileRecoil: jest.fn((address) => ({
      address,
      name: address,
      imageUrl: ''
    })),
    useProfilesRecoil: jest.fn((address) => ({
      address,
      name: address,
      imageUrl: ''
    })),
  });
});
