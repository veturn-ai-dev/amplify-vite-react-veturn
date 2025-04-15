import json

def lambda_handler(event, context):
    try:
        # Log the incoming event
        print("Received event:", json.dumps(event))
        
        # Get the request body
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', 'World')
        
        # Create response
        response = {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            "body": json.dumps({
                "message": f"Hello, {name}! This is a test VETURN Lambda function."
            })
        }
        
        return response
        
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "error": str(e)
            })
        } 