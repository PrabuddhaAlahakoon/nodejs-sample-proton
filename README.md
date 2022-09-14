# nodejs-sample-proton

Steps for Proton Demo.

First you have to create an environment template. here you have two options. one is to use the templates provided by aws (fargate) or use a custom environment which is created by you.
For both first few steps are similar.

	1. Go to environment templates 
	2. Create environtment template
		Here you have the option to select a sample bundle from aws (fargate or lambda)
		or 
		Added your custom environment (terraform or cloudformation) from s3 bucket. if u are going this route u have to upload the custom template project files compiled to tar.gz type to s3 bucket.
	
		As for the demo I used the bundles provided by aws here.

	3. Then fillout the needed details such as template name and description.
	4. Create template.
	5. publish the template draft. (When you click on create you will be redirected to template tab you'll find the button to publish draft there)

Now for the service template. pretty much same as environment template. you have the same two options and to do it you have to follow the same steps.

	1. Go to service templates
	2. Create service template
	3. 2 options here use the ones provided by aws or get your custome template from s3 bucket you uploaded to.
	
		As for this demo I used the bundle provided by aws.
	
	4. Then fillout the needed details such as service name and description.
	5. After that you have to select compatible environment templates. here choose the environment template you created previously.
	6. can skip other ones and click on create.
	7. publish the template draft. (When you click on create you will be redirected to template tab you'll find the button to publish draft there)

If you have not configured your account CI/CD repo and role next step is to setup those. You can configure them in the sidebar account settings or the notification on top after creating a service template.
You also should connect your github and repos to aws codestar or else you cant create services with them. This is needed for custom environments and services as well.

Next step is to create an environment using the created template.
	
	1. go to Environments in sidebar
	2. create environment and select environment template.
	3. In here, keep provisioning and development account as is.
	4. Fillout environment info such as name and description.
	5. Choose CloudFormation role or create one.
	6. Click on next
	7. You have to provide cidr block details here. can leave as is if there are no existing environments with default values.
	8. Click next, go through the preview to see all info is correct and click create.
	9. Wait till the environment is successfully deployed (might have to manually refresh to see progress or errors)

Now last step is to create the service and service instance. here you must provide a repo containing your service or docker image url. for both aws example service and custom project I've created repos and forks in Eqvika.

	1. go to Services in sidebar
	2. create service
	3. select the service template.
	4. provide service name and other details.
	5. select the github connection and repository. in this case sgx_test and nodejs-sample-proton. needed branch as well (master).
	6. click on next.
	7. provide instance details.
		provide an instance name
		select the created environment
		port the project is exposed on (80 in our case for nodejs project)
		keep other values as is.
	8. click on next and go through the preview to check if everything is alright and create it.

Now wait until everything is deployed and service status is successful (both service and service instance).
After that go to service instance and use the provided endpoint url to test if the service/project is successfully deployed.
(sidebar -> service instances or sidebar -> services -> select service -> then select the needed instance in instance window)
	
