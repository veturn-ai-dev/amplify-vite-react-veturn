import { APIGatewayAuthorizerResult, StatementEffect } from 'aws-lambda';

export const handler = async (event: any): Promise<APIGatewayAuthorizerResult> => {
  const token = event.authorizationToken;
  
  if (!token) {
    return generatePolicy('user', 'Deny' as StatementEffect, event.methodArn);
  }

  try {
    // Here you would validate the token with your auth provider
    // For now, we'll just check if it starts with 'Bearer '
    if (token.startsWith('Bearer ')) {
      return generatePolicy('user', 'Allow' as StatementEffect, event.methodArn);
    }
    
    return generatePolicy('user', 'Deny' as StatementEffect, event.methodArn);
  } catch (error) {
    return generatePolicy('user', 'Deny' as StatementEffect, event.methodArn);
  }
};

const generatePolicy = (
  principalId: string,
  effect: StatementEffect,
  resource: string
): APIGatewayAuthorizerResult => {
  return {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
}; 